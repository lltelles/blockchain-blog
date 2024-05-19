export const contractAddress = "0xDa661746b63D7a70b1D86aD9E3a8D8eDe1FA919A"

export const contractABI = [
    {
        "inputs": [],
        "name": "postCount",
        "outputs":[
            {
                "internalType": "uint256",
        "name": "",
        "type": "uint256"
            }
        ],
        "stateMutability": "view",
    "type": "function"
    },
    {
        "inputs":
        [
            {
              "internalType": "string",
              "name": "_title",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_content",
              "type": "string"
            }
          ],
          "name": "createPost",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
    },
    {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_id",
            "type": "uint256"
          }
        ],
        "name": "posts",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "title",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "content",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "author",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
]