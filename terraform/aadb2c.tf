resource "azurerm_aadb2c_directory" "consumer_domain" {
  country_code            = "FR"
  data_residency_location = "Europe"
  display_name            = "remax-b2c-tenant"
  domain_name             = var.b2c_tenant_name
  resource_group_name     = azurerm_resource_group.aadb2c.name
  sku_name                = "PremiumP1"
}

# resource "azuread_application" "react_app" {
#   display_name = "React B2C App"

#   web {

#     implicit_grant {
#       access_token_issuance_enabled = true
#       id_token_issuance_enabled     = true
#     }
#   }

#   single_page_application {
#     redirect_uris = [
#       "https://remaxb2ctenant.b2clogin.com/remaxb2ctenant.onmicrosoft.com/oauth2/authresp",
#       "http://localhost:3000/",
#       "https://home.chvt.fr/"
#     ]
#   }

#   fallback_public_client_enabled = true

#   required_resource_access {
#     resource_app_id = "00000003-0000-0000-c000-000000000000" # Microsoft Graph

#     resource_access {
#       id   = "37f7f235-527c-4136-accd-4a02d197296e" # openid
#       type = "Scope"
#     }

#     resource_access {
#       id   = "14dad69e-099b-42c9-810b-d002981feec1" # profile
#       type = "Scope"
#     }
#   }
# }

# resource "azuread_service_principal" "react_app_sp" {
#   client_id = azuread_application.react_app.client_id
# }