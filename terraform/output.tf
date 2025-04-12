output "static_web_app_url" {
  value = "https://${azurerm_static_web_app.main.default_host_name}"
}

output "storage_account_primary_blob_endpoint" {
  value = azurerm_storage_account.tfstate.primary_blob_endpoint
}
