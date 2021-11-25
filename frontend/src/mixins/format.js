
export default {
    methods: {
        currency(num) {
            const formatter = new Intl.NumberFormat('ru-RU', { 
                style: 'currency', 
                currency: 'RUB',
                currencyDisplay: 'symbol',
                notation: 'compact'
            })
            return formatter.format(num)
        }
    }
}