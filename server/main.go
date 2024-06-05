package main

import (
	"encoding/json"
	"log"
	"net/http"
	"root/api/database"
)

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

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "https://localhost:3000")
	(*w).Header().Add("Access-Control-Allow-Credentials", "true")
	(*w).Header().Add("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
	(*w).Header().Add("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")

}

func Handler(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	if r.Method == "POST" {
		log.Println("got POST")
		var user User

		err := json.NewDecoder(r.Body).Decode(&user)
		if err != nil {
			log.Println(err)
		}

		httpErr := db.SignUp(user.Email, user.DisplayName, user.Password)
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
    w.WriteHeader(200)
    jsonData, err := json.Marshal(httpErr)
    if err != nil {
      log.Fatal(err)
    }
    w.Write(jsonData)
	}
}
func main() {
	http.HandleFunc("/signup", Handler)
	log.Println("https://localhost:8080/")
	log.Fatal(http.ListenAndServeTLS(":8080", "../certificates/localhost.pem", "../certificates/localhost-key.pem", nil))
}
