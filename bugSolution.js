```javascript
//Corrected Aggregation Pipeline
db.collection.aggregate([
  {
    $match: { field: 'value' }
  },
  {
    $group: { _id: '$key', sum: { $sum: '$value' } }
  },
  {
    $sort: { sum: -1 }
  },
  {
    $limit: 10
  }
])
```