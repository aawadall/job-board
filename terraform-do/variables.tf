variable "digitalocean_token" {
  description = "DigitalOcean API Token"
  type = string
}

variable "region" {
  description = "The region that the server will be created in"
  type = string
  default = "nyc3"
  
}

variable "ssh_key_id" {
  description = "The ID or fingerprint of the SSH key to use for the Droplet"
  type        = string
}

variable "mongo_size" {
  description = "Size for the MongoDB cluster"
  type        = string
  default     = "db-s-1vcpu-1gb"
}

variable "redis_size" {
  description = "Size for the Redis cluster"
  type        = string
  default     = "db-s-1vcpu-1gb"
}

variable "app_name" {
  description = "Name of the App Platform service"
  type        = string
  default     = "job-board-backend"
}