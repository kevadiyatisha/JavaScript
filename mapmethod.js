const tableData = [
  {
    table_name_id: "1",
    table_name: "companies",
    columns: [
      {
        column_name: "company_name",
        roles: [
          {
            column_id: "1",
            role_id: "4",
            role_name: "no access",
            permission: "Read",
          },
          {
            column_id: "189",
            role_id: "157",
            role_name: "seller",
            permission: "Read",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "company_dba_name",
        roles: [
          {
            column_id: "183",
            role_id: "4",
            role_name: "no access",
            permission: "Read",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "company_domain",
        roles: [
          {
            column_id: "184",
            role_id: "4",
            role_name: "no access",
            permission: "Read",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "Write",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "company_email",
        roles: [
          {
            column_id: "185",
            role_id: "4",
            role_name: "no access",
            permission: "Read",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "Read",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "phone_number",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "write",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "Read",
          },
        ],
      },
      {
        column_name: "entity_type",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "Read",
          },
          {
            column_id: "200",
            role_id: "157",
            role_name: "seller",
            permission: "Write",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "Read",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "Read",
          },
        ],
      },
      {
        column_name: "industry_sector",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            column_id: "201",
            role_id: "157",
            role_name: "seller",
            permission: "Write",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "Write",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "Write",
          },
        ],
      },
      {
        column_name: "company_logo",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            column_id: "202",
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "country_code",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "Read",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
    ],
  },
  {
    table_name_id: "2",
    table_name: "company_addresses",
    columns: [
      {
        column_name: "address",
        roles: [
          {
            column_id: "2",
            role_id: "4",
            role_name: "no access",
            permission: "Read",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            column_id: "190",
            role_id: "158",
            role_name: "buyer",
            permission: "Read",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "address_2",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "Read",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "Read",
          },
        ],
      },
      {
        column_name: "city",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "Read",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "Write",
          },
        ],
      },
      {
        column_name: "state",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "country",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "Write",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "latitude",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "Read",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "Write",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "Write",
          },
        ],
      },
      {
        column_name: "longitude",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "location",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "Read",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "Read",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "zipcode",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
    ],
  },
  {
    table_name_id: "3",
    table_name: "users",
    columns: [
      {
        column_name: "first_name",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "last_name",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "email",
        roles: [
          {
            column_id: "3",
            role_id: "4",
            role_name: "no access",
            permission: "Read",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "Write",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "Write",
          },
        ],
      },
      {
        column_name: "phone_number",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "profile_image",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            column_id: "257",
            role_id: "157",
            role_name: "seller",
            permission: "Write",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "address_1",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "address_2",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "Write",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "Write",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "city",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "Write",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "Write",
          },
        ],
      },
      {
        column_name: "state",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "country",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "zip_code",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "Read",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "Read",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "Read",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "Read",
          },
        ],
      },
      {
        column_name: "country_code",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
    ],
  },
  {
    table_name_id: "4",
    table_name: "user_sessions",
    columns: [
      {
        column_name: "login_time",
        roles: [
          {
            column_id: "4",
            role_id: "4",
            role_name: "no access",
            permission: "Read",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "expire_time",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "logout_time",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "Read",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "Read",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "Write",
          },
        ],
      },
      {
        column_name: "ip_address",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
    ],
  },
  {
    table_name_id: "6",
    table_name: "roles",
    columns: [
      {
        column_name: "role_name",
        roles: [
          {
            column_id: "6",
            role_id: "4",
            role_name: "no access",
            permission: "Read",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "landing_dashboard",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
    ],
  },
  {
    table_name_id: "10",
    table_name: "versions",
    columns: [
      {
        column_name: "version_name",
        roles: [
          {
            column_id: "10",
            role_id: "4",
            role_name: "no access",
            permission: "Read",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "current",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "actual",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "switchover",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "formula",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "edit_from",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "Write",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "Write",
          },
        ],
      },
      {
        column_name: "edit_to",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "Write",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "notes",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
    ],
  },
  {
    table_name_id: "11",
    table_name: "screen_permissions",
    columns: [
      {
        column_name: "backend_url",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "Write",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "Write",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "Read",
          },
        ],
      },
      {
        column_name: "screen_url",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "Read",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "Read",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "Read",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "screen_name",
        roles: [
          {
            column_id: "11",
            role_id: "4",
            role_name: "no access",
            permission: "Read",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "notes",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "data_tags",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "Read",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "Write",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "Write",
          },
        ],
      },
    ],
  },
  {
    table_name_id: "15",
    table_name: "actions",
    columns: [
      {
        column_name: "action_name",
        roles: [
          {
            column_id: "15",
            role_id: "4",
            role_name: "no access",
            permission: "Read",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "action",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "Write",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "Read",
          },
        ],
      },
      {
        column_name: "startdate_time",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "recent_duration",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "Write",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "Write",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "notes",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "Write",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "Write",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "Write",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "Write",
          },
        ],
      },
      {
        column_name: "used_in_processes",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "used_in_dashboards",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "create_item",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "prompt_of_parent",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "prompt_show_all",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "select_list",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "select_line_item",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "sort_order",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "source_label",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "source_object",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "source_type",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "target_object",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "target_type",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "Write",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "production_data",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
      {
        column_name: "default_dashboard",
        roles: [
          {
            role_id: "4",
            role_name: "no access",
            permission: "None",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "None",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "None",
          },
        ],
      },
    ],
  },
  {
    table_name_id: "19",
    table_name: "actions_type",
    columns: [
      {
        column_name: "action_type",
        roles: [
          {
            column_id: "172",
            role_id: "4",
            role_name: "no access",
            permission: "Read",
          },
          {
            role_id: "157",
            role_name: "seller",
            permission: "Write",
          },
          {
            role_id: "158",
            role_name: "buyer",
            permission: "None",
          },
          {
            role_id: "159",
            role_name: "developer",
            permission: "Write",
          },
        ],
      },
    ],
  },
];
let tableName = [];
function table_name_id() {
  for (let i = 0; i < tableData.length; i++) {
    tableName.push(`Table Name Id : ${tableData[i].table_name_id.toString()} `);
    tableName.push(`Table Name : ${tableData[i].table_name.toString()} `);
  }
  return tableName;
}
console.log(table_name_id());

var totalColum = 0;
function count() {
  for (let i = 0; i < tableData.length; i++) {
    let count = 1;
    totalColum += count;
  }
  return totalColum;
}
console.log(` Total Number of Columns : ${count()}`);

var UniqueName = [];
function uniqueColumnName() {
  for (let i = 0; i < tableData.length; i++) {
    for (let j = 0; j < tableData[i].columns.length; j++) {
      UniqueName.push(tableData[i].columns[j].column_name);
      UniqueName = UniqueName.filter(
        (item) => UniqueName.indexOf(item) === UniqueName.lastIndexOf(item)
      );
    }
  }
  return UniqueName;
}
console.log(uniqueColumnName());

var uniqueRolesName = [];
function uniqueRoles() {
  for (let i = 0; i < tableData.length; i++) {
    for (let j = 0; j < tableData[i].columns.length; j++) {
      for (let k = 0; k < tableData[i].columns[j].roles.length; k++) {
        uniqueRolesName.push(tableData[i].columns[j].roles[k].role_name);
        uniqueRolesName = uniqueRolesName.filter(
          (item, index) => uniqueRolesName.indexOf(item) === index
        );
      }
    }
  }
  return uniqueRolesName;
}
console.log(uniqueRoles());

const permittedNone = [];
function permitted() {
  for (let i = 0; i < tableData.length; i++) {
    if (tableData[i].table_name === "screen_permissions") {
      for (let j = 0; j < tableData[i].columns.length; j++) {
        for (let k = 0; k < tableData[i].columns[j].roles.length; k++) {
          if (tableData[i].columns[j].roles[k].permission === "None") {
            permittedNone.push(tableData[i].columns[j].roles[k]);
          }
        }
      }
    }
  }
  return permittedNone;
}
console.log(permitted());

const allPermissionNon = [];
function allPermission() {
  for (let i = 0; i < tableData.length; i++) {
    for (let j = 0; j < tableData[i].columns.length; j++) {
      for (let k = 0; k < tableData[i].columns[j].roles.length; k++) {
        if (tableData[i].columns[j].roles[k].permission === "None") {
          allPermissionNon.push(tableData[i].columns[j].roles[k]);
        }
      }
    }
  }
  return allPermissionNon;
}
console.log(allPermission());
