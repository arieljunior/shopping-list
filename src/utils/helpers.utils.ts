export const getTotalSumCurrencyBRL = (values: number[]): string => {
    if(values.length === 0){
        return "R$ 00,00"
    }
	const result = values.reduce((acc, total) => acc + total, 0);
	return result.toLocaleString("pt-br", {
		style: "currency",
		currency: "BRL",
	});
};

export const formatDateWithTime = (date: string) => {
    if(!date){
        return "";
    }
	const _date = new Date(date);

	return (
		_date.toLocaleDateString() +
		" " +
		_date.toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit",
		})
	);
};
