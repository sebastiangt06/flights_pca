const StatsService = require('../services/statsService');

class StatsController {
    static async getAirlineStats(req, res) {
        try {
            const stats = await StatsService.getAirlineStats();
            res.json(stats);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener estadísticas' });
        }
    }

    static async getAirlineCount(req, res) {
        try {
            const count = await StatsService.getAirlineCount();
            res.json(count);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener el número de aerolíneas' });
        }
    }
}

module.exports = StatsController;