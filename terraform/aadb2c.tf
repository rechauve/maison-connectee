resource "azurerm_aadb2c_directory" "consumer_domain" {
  country_code            = "FR"
  data_residency_location = "Europe"
  display_name            = "remax-b2c-tenant"
  domain_name             = var.b2c_tenant_name
  resource_group_name     = azurerm_resource_group.aadb2c.name
  sku_name                = "PremiumP1"
}

resource "azuread_application" "react_app" {
  display_name = "React B2C App"

  web {
    redirect_uris = [
      "http://localhost:3000/",
      "https://home.chvt.fr/"
    ]

    implicit_grant {
      access_token_issuance_enabled = true
      id_token_issuance_enabled     = true
    }
  }
}



resource "azuread_service_principal" "react_app_sp" {
  client_id = azuread_application.react_app.client_id
}