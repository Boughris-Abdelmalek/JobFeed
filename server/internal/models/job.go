package models

import (
	"fmt"
	"github.com/Boughris-Abdelmalek/JobFeed/server/database"
)

type Job struct {
	ID    string `json:"id"`
	Title string `json:"title"`
}

func GetJobList() ([]Job, error) {
	var jobs []Job

	rows, err := database.Db.Query("SELECT * FROM job")
	if err != nil {
		return nil, fmt.Errorf("getJobList: %v", err)
	}
	defer rows.Close()

	for rows.Next() {
		var j Job
		if err := rows.Scan(&j.ID, &j.Title); err != nil {
			return nil, fmt.Errorf("getJobList: %v", err)
		}
		jobs = append(jobs, j)
	}
	if err := rows.Err(); err != nil {
		return nil, fmt.Errorf("getJobList: %v", err)
	}

	return jobs, nil
}
