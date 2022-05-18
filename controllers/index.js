const { getDb } = require('../lib/connection');
/**
 *
 * @param {startDate, endDate, minCount, maxCount} param0
 * @param param0.startDate contains startDate value
 * @param param0.endDate contains endDate value
 * @param param0.minCount contains minCount value
 * @param param0.maxCount contains maxCount value
 * @returns
 */
const getFilteredRecords = async ({
  startDate,
  endDate,
  minCount,
  maxCount,
}) => {
  const dbConnect = getDb();
  /* This Aggregation pipeline filters out the records based on the startDate and EndDate,
   Also sums the count value and filters with the mincount and maxcount values */
  const pipeline = [
    {
      $project: {
        createdAt: 1,
        key: 1,
        totalCount: { $sum: '$counts' },
      },
    },
    {
      $match: {
        createdAt: {
          $gte: new Date(startDate),
          $lte: new Date(endDate),
        },
        totalCount: {
          $gte: minCount,
          $lte: maxCount,
        },
      },
    },
    { $sort: { createdAt: -1 } },
  ];
  // Aggregation run
  const records = await dbConnect
    .collection('records')
    .aggregate(pipeline)
    .toArray();
  return records;
};

module.exports = {
  getFilteredRecords,
};
