package main

import (
	"log"
	"net/http"
	"root/api/database"
)

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "https://localhost:3000")
	(*w).Header().Add("Access-Control-Allow-Credentials", "true")
	(*w).Header().Add("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
	(*w).Header().Add("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")

}

func Handler(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	if r.Method == "POST" { 
		log.Println("Serving got POST")
		db.SignUp("saadsdsx@iaaadsasdgmail.com", "adssasdsaaaa", "Caasdsdt101!!")
	}
}
func main() {
	http.HandleFunc("/signup", Handler)
	log.Println("https://localhost:8080/")
	log.Fatal(http.ListenAndServeTLS(":8080", "../certificates/localhost.pem", "../certificates/localhost-key.pem", nil))
}
