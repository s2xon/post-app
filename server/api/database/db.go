package db

import (
	"encoding/json"
	"fmt"

	// "io"
	"log"
	"net/http"
	"net/url"
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

func BuildURL(table string, httpMethod string) (*http.Response, error) {
	url := fmt.Sprintf("https://bskumkjhgieyszozrjhq.supabase.co/rest/v1/%s?id=eq.1", table)
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
	if err != nil {
		log.Fatal(err)
	}

	defer resp.Body.Close()

	var user []User

	dc := json.NewDecoder(resp.Body).Decode(&user)
	if dc != nil {
		log.Fatal(dc)
	}

	log.Println(&user)
	return resp, nil
}

func GetUser(email string) *[]User {
	u, err := url.Parse("https://bskumkjhgieyszozrjhq.supabase.co/rest/v1/users?email={email}")
	if err != nil {
		log.Fatal(err)
	}

	q := u.Query()
  q.Set("email", "eq."+email)
	u.RawQuery = q.Encode()
	url := u.String()

  log.Println(url)

	er := godotenv.Load()
	if err != nil {
		log.Fatal(er)
	}

	supabaseKey := os.Getenv("SUPABASE_KEY")

	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		log.Fatal(err)
	}

	req.Header.Set("apikey", supabaseKey)
	req.Header.Set("Authorization", fmt.Sprintf("Bearer %s", supabaseKey))
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		log.Fatal(err)
	}
	defer resp.Body.Close()

  log.Println(resp)

	var user []User
	dc := json.NewDecoder(resp.Body).Decode(&user)
	if dc != nil {
		log.Fatal(dc)
	}

	return &user

}
