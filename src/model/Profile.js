const Database = require('../db/config')

module.exports = {
    async get() {
        const db = await Database()
        const result = await db.get(`SELECT * FROM profile`)
        await db.close()
        return {
            name: result.name,
            avatar: result.avatar,
            "monthly-budget": result.monthly_budget,
            "days-per-week": result.days_per_week,
            "hours-per-day": result.hours_per_day,
            "vacation-per-year": result.vacation_per_year,
            "value-hour": result.value_hour,
        }
    },
    async update(newData) {
        const db = await Database()
        await db.run(`
            UPDATE profile 
            SET name = "${newData.name}",
                avatar = "${newData.avatar}",
                monthly_budget = ${newData["monthly-budget"]},
                days_per_week = ${newData["days-per-week"]},
                hours_per_day = ${newData["hours-per-day"]},
                vacation_per_year = ${newData["vacation-per-year"]},
                value_hour = ${newData["value-hour"]}
        `)
        await db.close()
    }
}