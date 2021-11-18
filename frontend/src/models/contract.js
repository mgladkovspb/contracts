class Contract {
    constructor() {
        this._id = ''
        this.ds = false
        this.number = ''
        this.contractDate = ''
        this.plannedDate = ''
        this.actualDate = ''
        this.customer = ''
        this.object = ''
        this.city = ''
        this.sum = 0
        this.prepayment = 0
        this.profit = 0
        this.wage = 0
        this.wagePrepayment = 0
        this.rigging = 0
        this.state = 'draft'
    }
}

module.exports = Contract