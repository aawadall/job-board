resource "digitalocean_droplet" "job_board_backend" {
  name = "job-board-backend"
  region = var.region
  size = "s-1vcpu-1gb"
    image = "ubuntu-22-04-x64"
    ssh_keys = [var.ssh_key_id]
    tags = ["job-board", "backend"]
}