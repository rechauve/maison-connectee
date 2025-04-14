resource "azurerm_aadb2c_directory" "consumer_domain" {
  country_code            = "FR"
  data_residency_location = "Europe"
  display_name            = "remax-b2c-tenant"
  domain_name             = "remaxb2ctenant.onmicrosoft.com"
  resource_group_name     = azurerm_resource_group.aadb2c.name
  sku_name                = "PremiumP1"
}