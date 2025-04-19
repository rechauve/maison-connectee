
resource "azurerm_static_web_app" "main" {
  name                = var.static_site_name
  resource_group_name = azurerm_resource_group.main.name
  location            = var.location_2
  sku_size            = "Free"

  lifecycle {
    ignore_changes = [
      repository_branch,
      repository_url,
    ]
  }

  app_settings = {
    VITE_WEATHER_API_KEY = data.azurerm_key_vault_secret.meteo_api_key.value
  }
}

resource "azurerm_static_web_app_custom_domain" "main" {
  static_web_app_id = azurerm_static_web_app.main.id
  domain_name       = var.custom_domain_name
  validation_type   = "cname-delegation"
}

data "azurerm_key_vault_secret" "meteo_api_key" {
  name         = "vite-weather-api-key"
  key_vault_id = azurerm_key_vault.app.id
}