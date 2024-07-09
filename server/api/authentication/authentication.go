package auth

import (
	"bytes"
	"encoding/json"
	"io"

	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
)

type Data struct {
	AccessToken  string `json:"access_token"`
	RefreshToken string `json:"refresh_token"`
	User         User   `json:"user"`
}
type User struct {
	Id       string   `json:"id"`
	Email    string   `json:"email"`
	Password string   `json:"password"`
	Data     MetaData `json:"data"`
}
type MetaData struct {
	DisplayName string `json:"display_name"`
}

type JsonData struct {
	AccessToken  string   `json:"access_token"`
	RefreshToken string   `json:"refresh_token"`
	User         JsonUser `json:"user"`
}
type JsonUser struct {
	Id       string       `json:"id"`
	Email    string       `json:"email"`
	UserData JsonUserData `json:"user_metadata"`
}
type JsonUserData struct {
	DisplayName string `json:"display_name"`
}

type Error struct {
	Code      int    `json:"code"`
	ErrorCode string `json:"error_code"`
	Message   string `json:"msg"`
}

func SignUp(email string, displayName string, password string) (*JsonData, *Error) {
	url := "https://bskumkjhgieyszozrjhq.supabase.co/auth/v1/signup"

	userData := &User{
		Email:    email,
		Password: password,
		Data: MetaData{
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

	if resp.StatusCode != http.StatusOK {
		log.Println("Running err Code")
		body, er := io.ReadAll(resp.Body)
		if er != nil {
			log.Fatal(er)
		}
		log.Println(string(body))

		var error *Error
		err := json.Unmarshal(body, &error)
		if err != nil {
			log.Fatal(err)
		}
		log.Println(error)
		return nil, error
	}
	if resp.StatusCode == http.StatusOK {
		log.Println("Running 200 Code")
		body, err := io.ReadAll(resp.Body)
		if err != nil {
			log.Fatal(err)
		}
		log.Println(string(body))
		var data *JsonData
		if err != nil {
			log.Fatal(err)
		}
		json.Unmarshal(body, &data)
		log.Println(data)
		return data, nil
	}

	log.Println(resp)

	return nil, nil
}

func CheckUser(jwt_token string) bool {
	er := godotenv.Load()
	if er != nil {
		log.Fatal(er)
	}
	supaBaseKey := os.Getenv("SUPABASE_KEY")
	url := "https://bskumkjhgieyszozrjhq.supabase.co/auth/v1/user"

	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		log.Fatal(err)
	}
	req.Header.Set("Authorization", "Bearer "+jwt_token)
	req.Header.Set("apikey", supaBaseKey)
	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		log.Fatal(err)
	}
	defer resp.Body.Close()
	log.Println(resp.StatusCode)
	if resp.StatusCode == 200 {
		return true
	} else {
		return false
	}
}

func SignIn(email string, password string) (*JsonData, *Error) {
	er := godotenv.Load()
	if er != nil {
		log.Fatal(er)
	}
	supaBaseKey := os.Getenv("SUPABASE_KEY")
	url := "https://bskumkjhgieyszozrjhq.supabase.co/auth/v1/token?grant_type=password"

	userData := &User{
		Email:    email,
		Password: password,
	}

	jsonData, err := json.Marshal(userData)
	if err != nil {
		log.Fatal(err)
	}

	req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
	if err != nil {
		log.Fatal(err)
	}
	req.Header.Set("Authorization", "Bearer "+supaBaseKey)
	req.Header.Set("apikey", supaBaseKey)
	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		log.Fatal(err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		log.Println("Running err Code")
		body, er := io.ReadAll(resp.Body)
		if er != nil {
			log.Fatal(er)
		}
		log.Println(string(body))

		var error *Error
		err := json.Unmarshal(body, &error)
		if err != nil {
			log.Fatal(err)
		}
		log.Println(error)
		return nil, error
	}
	if resp.StatusCode == http.StatusOK {
		log.Println("Running 200 Code")
		body, err := io.ReadAll(resp.Body)
		if err != nil {
			log.Fatal(err)
		}
		log.Println(string(body))
		var data *JsonData
		if err != nil {
			log.Fatal(err)
		}
		json.Unmarshal(body, &data)
		log.Println(data)
		return data, nil
	}

	log.Println(resp)

	return nil, nil

}

//func GetUser() {
//
//}
//
//func UpdateUser()
//
//
//
//func DeleteUser()
//
//
//
//func LogoutUser()
//
