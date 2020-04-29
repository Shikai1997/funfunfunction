'@Html.Raw(Ajax.JavaScriptStringEncode(@Html.DropDownListFor(a => a.EditCompanyUser.org_id, new List<SelectListItem>(), new { @class = "enabledEdit" }).ToHtmlString()))'
