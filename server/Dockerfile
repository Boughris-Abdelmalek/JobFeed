FROM golang:1.22.1-alpine

WORKDIR /app

COPY ./server/go.mod ./server/go.sum ./

RUN go mod download

COPY ./server /app

RUN go build -o api ./cmd/api

EXPOSE 6060

CMD ["/app/api"]