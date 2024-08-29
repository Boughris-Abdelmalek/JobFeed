package handlers

import (
	"github.com/Boughris-Abdelmalek/JobFeed/server/internal/models"
	"github.com/gin-gonic/gin"
	"net/http"
)

func GetJobs(c *gin.Context) {
	jobs, err := models.GetJobList()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
	}

	c.JSON(http.StatusOK, jobs)
}
