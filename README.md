<p align='center'>
    <img width='150' src='https://user-images.githubusercontent.com/25598040/101400309-764b2300-38af-11eb-9137-b52fdcabcbb7.png' />
</p>

<p align='center'>
	<a href='https://nodejs.org' target='__blank'>
    	<img src="https://img.shields.io/badge/Backend-Node.js-green?style=flat-square&link=https://nodejs.org">
	</a>
	<a href='https://reactjs.org' target='__blank'>
    	<img src="https://img.shields.io/badge/Frontend-React-blue?style=flat-square&link=https://reactjs.org">
	</a>
	<a href='https://reactnative.dev' target='__blank'>
    	<img src="https://img.shields.io/badge/Frontend-React Native-blue?style=flat-square&link=https://reactnative.dev">
	</a>
	<a href='https://www.postgresql.org' target='__blank'>
    	<img src="https://img.shields.io/badge/Database-PostgreSQL-blue?style=flat-square&link=https://www.postgresql.org">
	</a>
	<a href='https://www.linkedin.com/in/lucas-rodrigues-985918197' target='__blank'>
    	<img src="https://img.shields.io/badge/Lucas-social-green?logo=linkedin&style=social&link=https://www.linkedin.com/in/lucas-rodrigues-985918197">
	</a>
</p>

## 🔍 About 

<p align='center'>
    <img src='https://user-images.githubusercontent.com/25598040/101396036-852ed700-38a9-11eb-8495-a38539a0695b.png' />
    <img src='https://user-images.githubusercontent.com/25598040/101396053-895af480-38a9-11eb-89b0-f0a61bb6e543.png' />
</p>

Be The Hero is an application originally developed in the OmniStack Weak 11.0 by Rocketseat, using JavaScript, ReactJS and React-Native with expo. I've made some changes to "upgrade" the project, like convert everything to TypeScript, migrate the database to PostgreSQL, authenticate users with json web tokens, rewrite the controllers and use cases to integrate easily with unit tests, rewrite the frontend with mobile first principles in mind, separate buttons and inputs in their own components and much more. Overall the application is the same, despite the structural changes.

The idea behind the application is very simple, philanthropic foundations, or NGOs, can create accounts through the web app providing contact information to register new incidents. The mobile app allows general users to list these incidents and get in touch with the foundations through WhatsApp or E-mail and provide support to the incidents.

## 👀 Demo

<p align='center'>
    <img src='https://user-images.githubusercontent.com/25598040/101418892-9ab5f800-38cd-11eb-9060-c929a77f4748.gif' /></br>
    <img src='https://user-images.githubusercontent.com/25598040/101419254-61ca5300-38ce-11eb-8257-f81be517a8d5.gif' /></br>
    <img src='https://user-images.githubusercontent.com/25598040/101421778-e1a6ec00-38d3-11eb-9678-82651a756e7d.gif' />
</p>

## 🔧 Made With

### Backend

- [Node](https://nodejs.org/en/)
- [PostgresSQL](https://www.postgresql.org/)
- [Express](https://www.npmjs.com/package/express)
- [TypeORM](https://typeorm.io)
- [JSON Web token](https://www.npmjs.com/package/jsonwebtoken)

### Frontend (WEB)

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://www.npmjs.com/package/axios)
- [Polished](https://www.npmjs.com/package/polished)
- [React Icons](https://www.npmjs.com/package/react-icons)

### Frontend (MOBILE)

- [Expo](https://expo.io/)
- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Axios](https://www.npmjs.com/package/axios)
- [Styled Components](https://styled-components.com/)

## 🔌 Installation

Clone the repository to your machine:

`git clone https://github.com/marmitoTH/be-the-hero.git`

### Backend

The backend will expect you to have a postgres database running on your machine, you can change the database credentials in `ormconfig.json` file.

```
yarn install                    # Install all dependencies
yarn typeorm migration:run      # Create the necessary tables
yarn start                      # Start the server
```

The server will be listening the port `3333`.

### Frontend

Same steps for both mobile and web application.

```
yarn install        # Install all dependencies
yarn start          # Start the application
```

## 🚩 Routes

### Ongs

```
POST \ongs

{
    "name": "ong_name",
	"whatsapp": "contact_whatsapp",
	"email": "contact_email",
	"city": "ong_city",
	"uf": "ong_uf"
}
```

### Sessions

```
POST \sessions

{
    "id": "ong_id"
}
```

### Incidents

```
GET \incidents
```

```
POST \incidents

{
    "title": "incident_title",
	"description": "incident_description",
	"value": "incident_donation_value"
}
```

```
DELETE \incidents

{
    "id": "incident_id"
}
```
