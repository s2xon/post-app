package db

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

func BuildURL(id string, httpMethod string) (*http.Response, error) {
	url := fmt.Sprintf("https://bskumkjhgieyszozrjhq.supabase.co/v1/%s", id)
	req, err := http.NewRequest(httpMethod, url, nil)
	if err != nil {
		log.Fatal(err)
	}
	req.Header.Set("apikey", os.Getenv("SUPABASE_KEY"))
	req.Header.Set("Authorization", fmt.Sprintf("Bearer %s", os.Getenv("SUPABASE_KEY")))
	client := &http.Client{}
	resp, err := client.Do(req)
	log.Println(resp)
	return resp, nil
}

func here() {
log.Println("yes")
}
