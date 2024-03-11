import React from "react";
import { ContactsFooter } from "./small/ContactsFooter";
import { RecentPost } from "./small/RecentPost";
import { Category } from "./small/Category";
import { Search } from "./small/Search";

const recentPosts = [
  {
    title: "Сегодня Дмитрий Медведев предложил",
    path: "/",
  },
  {
    title: "Путин создает Новый Мировой Порядок",
    path: "/",
  },
  {
    title: "На заседании совбеза обсудили Украину",
    path: "/",
  },
  {
    title: "В России испытан новый двигатель для автомобиля",
    path: "/",
  },
  {
    title: "Пуск ракеты состоится сегодня в полночь",
    path: "/",
  },
];

const categories = [
  {
    title: "Стиль жизни",
    path: "/",
  },
  {
    title: "Дизайн",
    path: "/",
  },
  {
    title: "Мода",
    path: "/",
  },
  {
    title: "Бизнес",
    path: "/",
  },
  {
    title: "Обновить до премиума?",
    path: "/",
  },
];

export const Footer = () => {
  return (
    <footer className="mb-5">
      <div className="container flex gap-5">
        <ContactsFooter />

        <div className="flex flex-col justify-start w-1/4 gap-2">
          <h4 className="text-lg font-bold text-gray-700">Недавние посты</h4>
          <div>
            {recentPosts.map((item, i) => {
              return <RecentPost title={item.title} path={item.path} key={i} />;
            })}
          </div>
        </div>

        <div className="flex flex-col justify-start w-1/4 gap-2">
          <h4 className="text-lg font-bold text-gray-700">Категории</h4>
          <div>
            {categories.map((item, i) => {
              return <Category title={item.title} path={item.path} key={i} />;
            })}
          </div>
        </div>

        <div className="flex flex-col justify-start w-1/4 gap-2">
          <h4 className="text-lg font-bold text-gray-700">Поиск</h4>
            <Search />
        </div>
      </div>

      <div className="border-t-[1px] my-8">
        <div className="text-center mt-8 flex flex-row justify-center items-center">
            <div className="text-gray-700 text-sm">
                Powered By WordPress | 
            </div>
            <a className="text-sm ml-1 text-sky-500 hover:text-sky-400" href="/">Pegas News Magazine</a>
        </div>
      </div>
    </footer>
  );
};
