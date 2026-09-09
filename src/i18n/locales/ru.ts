
export default {
  translation: {
    sidebar: { 
      header: "Борьба с мошенничеством",
      dashboard: "Мониторинг",
      reports: "Отчеты",
      transactions: "Транзакции",
      help: "Помощь",
      settings: "Настройки",
    },
    reports: {
      tabs: {
        clients: "Клиенты",
        deposit: "Депозит",
        withdraw: "Выплата",
        loans: "Кредиты",
        history: "История транзакций"
      },
      controlPanel: {
        header: "Профиль клиента",
        tip: "Просмотр баланса счета клиента",
        idInput: "ID аккаунта",
        balanceInput: "Баланс аккаунта",
        editButton: "Изменить поля",
        addButton: "Добавить"
      },
      table: {
        id: "CID",
        fullName: "Имя",
        city: "Город",
        state: "Штат",
        address: "Адрес",
        phone: "Номер телефона",
        balance: "Баланс аккаунта"
      },
      pagination: {
        information: "Показывается с {{from}} по {{to}} из {{amount}} пользователей",
        five: "5 пользователей по странице",
        ten: "10 пользователей по странице",
        fifteen: "15 пользователей по странице" 
      },
      popUp: {
        edit: { 
          header: "Изменение полей",
          button: "Изменить"
        },
        add: {
          header: "Добавление клиента",
          button: "Добавить"
        },
        fields: {
          id: "ID",
          fullName: "Имя",
          city: "Город",
          state: "Штат", 
          address: "Адресс",
          phone: "Номер телефона",
          balance: "Баланс"

        }
      }
    },
    dashboard: {
      header: "Мониторинг борьбы с мошенничеством",
      chart: {
        header: "Обработанные транзакции",
        deposits: "Депозиты",
        loans: "Кредиты",
        withdrawals: "Выплаты"
      },
      transactions: "Все транзакции",
      rate: "Уровень одобрения",
      pending: "Ожидающие подтверждения",
      approved: "Одобренные транзакции",
      rejected: "Отклоненные транзакции",
      postponed: "Отложенные подтверждения"
    },
    transactions: {
      header: "Предупреждение о мошеннических действиях",
      summary: {
        header: "Резюме",
        payment: "Платеж",
        cvvResponse: "CVV Ответ",
        avsResponse: "AVS Ответ",
        number: "Номер",
        bank: "Банк"
      },

      account: {
        header: "Аккаунт",
        number: "Номер",
        amount: "Сумма заказа",
        creation: "Дата создания",
        update: "Дата обновления",
        id: "ID последнего заказа",
      },
      atm: "Банкомат",
      approveButton: "Одобрить",
      declineButton: "Отказать"
    },
    analyzeButton: "Анализировать"
  },
};