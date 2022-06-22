
interface FormatMoneyInterface {
    num: number,
    // currencyLogo?: string,
    currencyCode?: string,
    format?: 'en-US',
    minimumFractionDigits?: number
}

export const formatMoney = (data: FormatMoneyInterface) => {
    const formatter = new Intl.NumberFormat(data.format ? data.format : 'en-US', {
        style: 'currency',
        currency: data.currencyCode ? data.currencyCode : "USD",
        minimumFractionDigits: data.minimumFractionDigits ? data.minimumFractionDigits : 2
    })
    return formatter.format(data.num)
}
 
