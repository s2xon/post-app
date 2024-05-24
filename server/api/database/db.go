package db

import (
	"bytes"
	"encoding/json"
	// "fmt"

	// "io"
	"log"
	"net/http"
	// "net/url"
	"os"

	"github.com/joho/godotenv"
)

type User struct {
	Id       int8   `json:"id"`
	Email    string `json:"email"`
	Password string `json:"password"`
	Data     Data   `json:"data"`
}
type Data struct {
	DisplayName string `json:"display_name"`
}

func SignUp(email string, displayName string, password string) {
	url := "https://bskumkjhgieyszozrjhq.supabase.co/auth/v1/signup"

	userData := &User{
		Email:    email,
		Password: password,
		Data: Data{
			DisplayName: displayName,
		},
	}

	jsonData, err := json.Marshal(userData)
	if err != nil {
		log.Fatal(err)
	}

	req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))

	er := godotenv.Load()
	if er != nil {
		log.Fatal(er)
	}

	supaBaseKey := os.Getenv("SUPABASE_KEY")

	req.Header.Set("Authorization", "Bearer "+supaBaseKey)
	req.Header.Set("apikey", supaBaseKey)
	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		log.Fatal(err)
	}

	defer resp.Body.Close()

	log.Println(resp)
}

//func SignIn() {
//
//}
//
//func GetUser() {
//
//}
//
//func UpdateUser() {
//
//}
//
//func DeleteUser() {
//
//}
//
//func LogoutUser() {
//
//}
