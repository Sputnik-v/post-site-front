import React from "react";


export const ContactsFooter = () => {
    return (
        <div className="flex flex-col justify-start gap-2 w-1/4">
          <h4 className="text-lg font-bold text-gray-700">
            Pegas News Magazine
          </h4>
          <p className="text-gray-500 text-md">Начни писать, несмотря ни на что. Вода не течет, пока кран не открыт.</p>
          <div className="flex flex-col justify-start">
            <p className="font-bold text-gray-500">Адресс</p>
            <p className="text-gray-500 text-md">123-12, проспект Кирова</p>
            <p className="text-gray-500 text-md">Москва, 10001</p>
          </div>
          <div className="flex flex-col justify-start">
            <p className="font-bold text-gray-500">Часы работы</p>
            <p className="text-gray-500 text-md">ПН-ПТ: 9:00–17:00</p>
            <p className="text-gray-500 text-md">СБ-ВС: 11:00–15:00</p>
          </div>
        </div>
    )
}