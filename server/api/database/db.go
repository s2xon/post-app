package db

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
)

type User struct {
	Id        int8   `json:"id"`
	Email     string `json:"Email"`
	FirstName string `json:"FirstName"`
	LastName  string `json:"LastName"`
	Password  string `json:"Password"`
}

func BuildURL(id string, httpMethod string) (*http.Response, error) {
	url := fmt.Sprintf("https://bskumkjhgieyszozrjhq.supabase.co/rest/v1/%s", id)
	req, err := http.NewRequest(httpMethod, url, nil)
	if err != nil {
		log.Fatal(err)
	}

	er := godotenv.Load()
	if er != nil {
		log.Fatal("Error loading .env file")
	}
	supabaseEnv := os.Getenv("SUPABASE_KEY")

	req.Header.Set("apikey", supabaseEnv)
	req.Header.Set("Authorization", fmt.Sprintf("Bearer %s", supabaseEnv))
	client := &http.Client{}
	resp, err := client.Do(req)

	user := &User{}

	dc := json.NewDecoder(resp.Body).Decode(user)
	if dc != nil {
		panic(dc)
	}
	log.Println(user)
	log.Println(resp)
	return resp, nil
}
