variable "subscription_id" {

}

variable "tenant_id" {

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

variable "aadb2c_resource_group_name" {
  default = "aadb2c-rg"
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

variable "custom_domain_name" {
  default = "home.chvt.fr"
}

variable "b2c_tenant_name" {
  description = "Nom du tenant B2C"
  type        = string
  default     = "remaxb2ctenant.onmicrosoft.com"
}

variable "key_vault_name" {
  description = "Nom du Key Vault"
  type        = string
  default     = "kv-maison-connectee-frc"

}

variable "allowed_ip" {
  description = "IP autorisée pour le Key Vault"
  type        = string
}