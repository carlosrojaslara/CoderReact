# SIMULACION DE ECOMMERCE PARA LA VENTA DE AUDIO, EFECTOS Y AMBIENTES 

El proyecto simula el funcionamiento de un Ecommerce, desde la visualizacion de las Cards, su detalle, agregado al carrito, detalle final de la compra y el formulario de suscripcion 

## `COMPONENTES`

El index contiene el ReactDom.render, que en la etiqueta root, que se encuentra en el HTML, realiza la renderizacion de la aplicacion. En la app estan los componentes Header y Main, donde tambien se importan el Browser Router desde react-router-dom y el CartContext, que es el nombre del context creado para acceder a funciones del CartContext.
En el Main estan los ruteos para los componentes ItemListContainer, ItemDetailContainer y el Cart, siendo el home el componente ItemListContainer.
En el Header estan los links para filtrar los elementos del ItemDetailContainer, actualizacion de los elementos del Cart y el NavBar.

### `ItemList` 
Child del ItemListContainer, tiene el .map de los elementos que el componente Item retorna.

### `ItemDetail`
Retorna el producto seleccionado.

### `ItemCount`
Contiene la logica del contador, para agregar o quitar elementos del Cart.

### `Form` 
Retorna el formulario de compra

### `Cart`
Contiene la logica de la compra y la subida de informacion a la base de datos. Retorna el detalle del producto a comprar, el id de la compra y un link para volver al home.

# SOBRE MI 
Mi nombre es Carlos A. Rojas Lara soy estudiante de segundo de la carrera de Lic. en Informatica de la UNLP. Vivo en La Plata Buenos Aires Argentina. El desarrollo de este proyecto es mi primera experiencia en la creacion de una app con este grado de complejidad.

# Herramientas
El maquetado de la misma se hizo solo con CSS nativo. Se utilizo el createcontext de react. Firebase como Base de datos desde donde se guardan los productos que se piden en el ItemListContainer y se envian las ordenes desde el componente Cart. 














