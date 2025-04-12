terraform {
  backend "azurerm" {
    resource_group_name  = "maison-connectee-rg"
    storage_account_name = "tfstatemaisonrechauve"
    container_name       = "tfstate"
    key                  = "terraform.tfstate"
  }
}
