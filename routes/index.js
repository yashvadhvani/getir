/* eslint-disable comma-dangle */
const express = require('express');
const { body, validationResult } = require('express-validator');

const router = express.Router();
const { getFilteredRecords } = require('../controllers/index');

/**
 * Route for getting the records
 */
router.post(
  '/records',
  body('startDate').isDate(),
  body('endDate').isDate(),
  body('minCount').isNumeric(),
  body('maxCount').isNumeric(),
  /**
   * This function validates and sends the response if no errors
   * @param {*} req the request object contains the filters to be applied
   * @param {*} res res sends error/response needed
   * @returns Error/response needed
   */
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          code: 400,
          msg: 'Error While validating payload',
          errors: errors.array(),
        });
      }
      return res.json({
        code: 0,
        msg: 'Success',
        records: await getFilteredRecords(req.body),
      });
    } catch (error) {
      return res.status(400).json({
        code: 400,
        msg: 'Something went wrong',
      });
    }
  }
);

module.exports = router;
