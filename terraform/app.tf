
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
}

resource "azurerm_static_web_app_custom_domain" "main" {
  static_web_app_id = azurerm_static_web_app.main.id
  domain_name       = var.custom_domain_name
  validation_type   = "cname-delegation"
}