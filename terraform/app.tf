
resource "azurerm_static_web_app" "main" {
  name                = var.static_site_name
  resource_group_name = azurerm_resource_group.main.name
  location            = var.location_2
  sku_size            = "Free"

}
