function Contacts() {
  return (
    <main className="contacts-wrapper">
      <div className="contacts-sections">
        <section className="contact-section left-section">
          <h2>Контакты</h2>
          <p>Ул. Пушкина Д. Колотушкина</p>
          <p>example@email.ru</p>
          <p>8 000 000 00 00</p>
        </section>
        <section className="contact-section right-section">
          <h2>Обратная связь</h2>
          <input type="text" placeholder="Имя" />
          <input type="text" placeholder="Фамилия" />
          <input type="text" placeholder="Номер" />
          <textarea name="contacts-message" placeholder=""></textarea>
        </section>
      </div>
    </main>
  );
}

export default Contacts;
