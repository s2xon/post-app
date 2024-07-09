package main

import (
	"encoding/json"
	"io"
	"log"
	"net/http"
	"root/api/authentication"
)

type Data struct {
	AccessToken  string `json:"access_token"`
	RefreshToken string `json:"refresh_token"`
	User         User   `json:"user"`
}
type AuthUser struct {
	Id       string   `json:"id"`
	Email    string   `json:"email"`
	Password string   `json:"password"`
	Data     MetaData `json:"data"`
}
type MetaData struct {
	DisplayName string `json:"display_name"`
}

type User struct {
	Email       string `json:"email"`
	DisplayName string `json:"displayName"`
	Password    string `json:"password"`
}

type Error struct {
	Code      int    `json:"code"`
	ErrorCode string `json:"error_code"`
	Message   string `json:"msg"`
}
type Cookie struct {
	Jwt string `json:"jwt"`
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "https://localhost:3000")
	(*w).Header().Add("Access-Control-Allow-Credentials", "true")
	(*w).Header().Add("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
	(*w).Header().Add("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")

}

func SignUpHandler(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	if r.Method == "POST" {
		log.Println("got POST")
		var user User

		err := json.NewDecoder(r.Body).Decode(&user)
		if err != nil {
			log.Println(err)
		}

		data, httpErr := auth.SignUp(user.Email, user.DisplayName, user.Password)
		if httpErr != nil {
			w.Header().Set("Content-Type", "application/json")
			w.WriteHeader(httpErr.Code)
			jsonData, err := json.Marshal(httpErr)
			if err != nil {
				log.Fatal(err)
			}
			w.Write(jsonData)
			return
		}
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		log.Println("Break")
		jsonData, err := json.Marshal(data)
		if err != nil {
			log.Fatal(err)
		}
		w.Write(jsonData)
	}
}

func SignInHandler(w http.ResponseWriter, r *http.Request) {
	var user *User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		panic(err)
	}
	if r.Method == "POST" {
		data, httpErr := auth.SignIn(user.Email, user.Password)
		if httpErr != nil {
			w.Header().Set("Content-Type", "application/json")
			w.WriteHeader(httpErr.Code)
			jsonData, err := json.Marshal(httpErr)
			if err != nil {
				log.Fatal(err)
			}
			w.Write(jsonData)
			return
		}
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		log.Println("Break")
		jsonData, err := json.Marshal(data)
		if err != nil {
			log.Fatal(err)
		}
		w.Write(jsonData)
	}

}

func CheckUserHandler(w http.ResponseWriter, r *http.Request) {
	log.Println("_______________________CHECKUSER_______________________")
	var cookie *Cookie
	body, err := io.ReadAll(r.Body)
	if err != nil {
		log.Fatal(err)
	}
	json.Unmarshal(body, &cookie)
	isUser := auth.CheckUser(cookie.Jwt)
	log.Println(isUser)
	if isUser {
		code := Error{
			Code:      200,
			ErrorCode: "200",
			Message:   "User is user.",
		}
		json, err := json.Marshal(code)
		if err != nil {
			panic(err)
		}
		w.Header().Set("Content-Type", "application/json:")
		w.WriteHeader(http.StatusOK)
		w.Write(json)
	}
	if !isUser {
		log.Println("This is not a user")
		code := Error{
			Code:      404,
			ErrorCode: "404",
			Message:   "Unauthorized User.",
		}
		json, err := json.Marshal(code)
		if err != nil {
			panic(err)
		}
		w.Header().Set("Content-Type", "application/json:")
		w.WriteHeader(code.Code)
		w.Write(json)

	}
	return
}

func main() {
	http.HandleFunc("/signup", SignUpHandler)
	http.HandleFunc("/signin", SignInHandler)
	http.HandleFunc("/checkuser", CheckUserHandler)
	log.Println("https://localhost:8080/")
	log.Fatal(http.ListenAndServeTLS(":8080", "../certificates/localhost.pem", "../certificates/localhost-key.pem", nil))
}
