variable "subscription_id" {
  default = "b96dc059-faed-4a80-b03e-c1d7b04d9dbe"
}

variable "tenant_id" {
  default = "b27a28ef-be28-409f-bab0-e1404d87914a"
}

variable "location" {
  default = "francecentral"
}

variable "location_2" {
  default = "westeurope"
}

variable "resource_group_name" {
  default = "maison-connectee-rg"
}

variable "static_site_name" {
  default = "maison-connectee-site"
}

variable "storage_account_name" {
  default = "tfstatemaisonrechauve" # doit être unique globalement
}

variable "container_name" {
  default = "tfstate"
}
