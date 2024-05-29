package db

import (
	"bytes"
	"encoding/json"
	
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
)

type User struct {
<<<<<<< HEAD
	Id       int8   `json:"id"`
	Email    string `json:"email"`
	Password string `json:"password"`
	Data     Data   `json:"data"`
}
type Data struct {
	DisplayName string `json:"display_name"`
}
type Error struct {
  Code      int     `json:"code"`
  ErrorCode string  `json:"error_code"`
  Message   string  `json:"msg"`
}

func SignUp(email string, displayName string, password string) (*Error){
	url := "https://bskumkjhgieyszozrjhq.supabase.co/auth/v1/signup"

	userData := &User{
		Email:    email,
		Password: password,
		Data: Data{
			DisplayName: displayName,
		},
	}

	jsonData, err := json.Marshal(userData)
=======
	Id        int8   `json:"id"`
	Email     string `json:"email"`
	FirstName string `json:"firstname"`
	LastName  string `json:"lastname"`
	Password  string `json:"password"`
}

func GetUser(email string) *[]User {
	u, err := url.Parse("https://bskumkjhgieyszozrjhq.supabase.co/rest/v1/users?email={email}")
>>>>>>> 62096f2 (none)
	if err != nil {
		log.Fatal(err)
	}

<<<<<<< HEAD
	req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))

	er := godotenv.Load()
	if er != nil {
=======
	q := u.Query()
  q.Set("email", "eq."+email)
	u.RawQuery = q.Encode()
	url := u.String()

  log.Println(url)

	er := godotenv.Load()
	if err != nil {
>>>>>>> 62096f2 (none)
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
  
  if resp.StatusCode != http.StatusOK {
    errCode := &Error{}
    err := json.NewDecoder(resp.Body).Decode(errCode)
    if err != nil {
      log.Fatal(err)
    }
    log.Println(errCode)
    return errCode 
  }
	defer resp.Body.Close()

<<<<<<< HEAD
	log.Println(resp)

  return nil
=======
  log.Println(resp)

	var user []User
	dc := json.NewDecoder(resp.Body).Decode(&user)
	if dc != nil {
		log.Fatal(dc)
	}

	return &user
}

func AddUser(email string, firstName string, LastName string, password string) {
  userData := User{
    Email:      email,
    FirstName:  firstName,
    LastName:   LastName,
    Password:   password,
  }

  jsonData, err := json.Marshal(userData)
  if err != nil {
    log.Fatal(err)
  }


  url := "https://bskumkjhgieyszozrjhq.supabase.co/rest/v1/users"

  req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
  if err != nil {
    log.Fatal(err)
  }
  er := godotenv.Load()
	if err != nil {
		log.Fatal(er)
	}
	supabaseKey := os.Getenv("SUPABASE_KEY")

  req.Header.Set("apikey", supabaseKey)
	req.Header.Set("Authorization", fmt.Sprintf("Bearer %s", supabaseKey))
  req.Header.Set("Content-Type", "application/json")
	client := &http.Client{}
	resp, err := client.Do(req)
  if err != nil {
    log.Fatal(err)
  }

  defer resp.Body.Close()

  log.Println(resp)
>>>>>>> 62096f2 (none)
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
