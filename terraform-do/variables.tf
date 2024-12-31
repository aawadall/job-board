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
