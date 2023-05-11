// This file manipulates the MongoDB sample database called Analytics
use("sample_analytics")

// Rank accounts by the highest number of transactions
db.transactions.find(
    {},
    {
        _id: 0,
        account_id: 1,
        transaction_count: 1
    }
).sort(
    {
        transaction_count: -1
    }
)

// Rank accounts by the transactions' amount traded
db.transactions.aggregate(
    [
        {
            $project: {
                _id: 0,
                account_id: 1,
                "Total": {
                    $sum: "$transactions.amount"
                }
            }
        },
        {
            $sort: {
                Total: -1
            }
        }
    ]
).toArray()

// Rank customers by the number of accounts
db.customers.aggregate(
    [
        {
            $project: {
                _id: 0,
                name: 1,
                "Number of accounts": {
                    $size: "$accounts"
                },
                accounts: 1
            }
        },
        {
            $sort: {"Number of accounts": -1}
        }
    ]
).toArray()

// Rank accounts by limit
db.accounts.aggregate(
    [
        {
            $sort: {
                limit: -1
            }
        },
        {
            $project: {
                _id: 0,
                account_id: 1,
                limit: 1
            }
        }
    ]
).toArray()

// Rank accounts by products
db.accounts.aggregate(
    [
        {
            $project: {
                _id: 0,
                account_id: 1,
                "Number of products": {
                    $size: "$products"
                },
                products: 1
            }
        },
        {
            $sort: {
                "Number of products": -1
            }
        }
    ]
).toArray()