const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const {ApolloServer, gql} = require('apollo-server-express');  
const {merge} = require('lodash');

const Cliente = require('./models/cliente');
const Carro = require('./models/carro');
const Categoria = require('./models/categoria');
const Compra = require('./models/compra');
const Menu = require('./models/menu');
const Pago = require('./models/pago');
const Producto = require('./models/producto');
const Sucursal = require('./models/sucursal');
const Usuario = require('./models/usuario');
const Carroproducto = require('./models/carroproducto');
const Comprausuario = require('./models/comprausuario');
const Pagousuario = require('./models/pagousuario');
const Productocategoria = require('./models/productocategoria');
const Productomenu = require('./models/Productomenu');




mongoose.connect('mongodb+srv://admin:admin1234@cluster0.obvkdn9.mongodb.net/Sushi',{useNewUrlParser: true, useUnifiedTopology: true});



const typeDefs= gql`

type Carro{
  id: ID!
  nombreProducto:String! 
  precioProducto: Int!
  cantidadProducto: Int!
  totalPagar: Int!
  productos:[Producto]
}

type Categoria{
  id:ID!
  nombreCategoria:String!
  producto: [Producto]
}

type Cliente{
    id:ID!
    run: String!
    nombreCompleto: String!
    email: String!
    direccion: String!
    comuna: String!
    provincia: String!
    region: String!
    numeroTelefono: Int!
    usuario: String!
    pass: String!
    compra: [Compra]
}

type Compra{
  id :ID!
  cantidadTotal:Int!
  Usuario: Usuario
  Sucursal: Sucursal
  pago: [Pago]
  producto: [Producto]
}

type Menu{
    id:ID!
    eleccionMenu:Int!
}

type Pago{
    id:ID!
    tipoPago: String!
    historialTransacciones:Int!
    compra:Compra

}
  
type Producto{
    id:ID!
    nombreProducto: String!
    stock: Int!
    proveedor: String!
    carro:Carro
    categoria:Categoria
    menu:Menu
    compra:Compra
}

type Carroproducto{
  id:ID!
  producto:Producto
  carro:Carro
  cantidad:Int
}

type Comprausuario{
  id:ID!
  producto:Producto
  usuario:Usuario
}

type Pagousuario{
  id:ID!
  pago:Pago
  usuario:Usuario
}

type Productocategoria{
  id:ID!
  producto:Producto
  categoria:Categoria
}

type Productomenu{
  id:ID!
  producto:Producto
  menu:Menu
}


type Sucursal{
    id:ID!
    registroTransaccionesSucursal: String!
    tipoPago: String!
    compra:[Compra]
    
}
  
type Usuario{
    id:ID!
    run: String!
    nombreCompleto: String!
    email: String!
    direccion: String!
    comuna: String!
    provincia: String!
    registro:String!
    region: String!
    numeroTelefono: Int!
}

  type Query { 
    
    getCarros: [Carro]
    getCarro(id: ID!) : Carro

    getCategorias: [Categoria]
    getCategoria(id: ID!) : Categoria

    getClientes: [Cliente]
    getCliente(run: String!) : Cliente
    
    getCompras: [Compra]
    getCompra(id: ID!) : Compra
    
    getMenus: [Menu]

    getSucursales: [Sucursal]
    getSucursal(id: ID!) : Cliente

    getUsuarios: [Usuario]
    getUsuario(run: String!) : Usuario

    getPagos: [Pago]
    getPago(id: ID!) : Pago

    getProductos: [Producto]
    getProducto(id: ID!) : Producto

    getCarroproductos: [Carroproducto]
    getCarroproducto(id:ID!): Carroproducto

    getComprausuarios: [Comprausuario]
    getComprausuario(id:ID!): Comprausuario

    getProductocategorias: [Productocategoria]
    getProductocategoria(id:ID!): Productocategoria

    getProductomenus: [Productomenu]
    getProductomenu(id:ID!): Productomenu

    getPagousuarios: [Pagousuario]
    getPagousuario(id:ID!): Pagousuario
  }
  

  input CarroInput{
    nombreProducto:String
    precioProducto: Int
    cantidadProducto:Int
    totalPagar:Int
    productoString: String
  }

  input UsuarioInput{
    run: String
    nombreCompleto: String
    email: String
    direccion: String
    comuna: String
    provincia: String
    registro:String
    region: String
    numeroTelefono: Int
  }
  
  input CategoriaInput{
    nombreCategoria:String
  }

  input CompraInput{
    cantidadTotal: Int
  }
  
  input MenuInput{
    eleccionMenu: Int
  }

  input ClienteInput{
    run: String
    nombreCompleto: String
    email: String
    direccion: String
    comuna: String
    provincia: String
    region: String
    numeroTelefono: Int
    usuario: String
    pass: String
  }
  
  input CompraInput{
    cantidadTotal: Int
  }

  input PagoInput{
    tipoPago: String
    historialTransacciones:Int
    compraId:String
  }

  input ProductoInput{
    nombreProducto: String
    stock: Int
    proveedor: String
  } 

  input CarroproductoInput{
    productoString:String
    carroString:String
    cantidad:Int
  }

  input ComprausuarioInput{
    compraString:String
    usuarioString:String
  }

  input PagousuarioInput{
    pagoString:String
    usuarioString:String
  }

  input ProductocategoriaInput{
    productoString:String
    categoriaString:String
  }

  input ProductomenuInput{
    productoString:String
    menuString:String
  }

  input SucursalInput{
    registroTransaccionesSucursal: String
    tipoPago: String
  } 



  type Alert{
    message: String
  }

  type Mutation{
    
    addCompra(input: CompraInput) : Compra
    addCliente(input: ClienteInput) : Cliente
    addProducto(input: ProductoInput) : Producto
    addPago(input: PagoInput) : Pago
    addUsuario(input: UsuarioInput) : Usuario
    addCategoria(input: CategoriaInput) : Categoria
    addMenu(input: MenuInput) : Menu
    addCarro(input: CarroInput) : Carro
    addSucursal(input: SucursalInput) : Sucursal
    addCarroproducto(input: CarroproductoInput): Carroproducto
    addComprausuario(input: ComprausuarioInput): Comprausuario
    addPagousuario(input: PagousuarioInput): Pagousuario
    addProductocategoria(input: ProductocategoriaInput): Productocategoria
    addProductomenu(input: ProductomenuInput): Productomenu

    updateCliente(run: String! , input:ClienteInput) : Cliente
    updatePago(run: String! , input:CompraInput) : Compra
    updateCompra(run: String! , input:CompraInput) : Compra
    updateUsuario(run: String! , input:UsuarioInput) : Usuario
    updateProducto(run: String! , input:ProductoInput) : Producto
    updateSucursal(run: String! , input:SucursalInput) : Sucursal

    deleteUsuario(run: String!) : Alert
    deleteCarro(carro_id: ID!) : Alert
    deleteCliente(run:String!) : Alert
    
  }

`

const resolvers = {
    Query : {
      
        async getCarros(obj){
          const carros = await Carro.find().populate('producto').populate({path:'producto',strictPopulate:false}); 
          return carros;
        },
        async getCarro(obj, {id}){
          const carro= await Carro.findById(id).populate('producto').populate({path:'producto',strictPopulate:false});
          return carro;
        },

        async getCategorias(obj){
          const categorias= await Categoria.find(); 
          return categorias;
        },

        
        async getCategoria(obj, {id}){
          const categoria= await Categoria.findById(id);
          return categoria;
        },

        async getCarroproductos(obj){
          const carroproductos= await Carroproducto.find(); 
          return carroproductos;
        },

        
        async getCarroproducto(obj, {id}){
          const carroproducto= await Carroproducto.findById(id).populate('producto').populate({path:'producto',populate:'carro'});
          return carroproducto;
        },

        async getComprausuarios(obj){
          const comprausuarios= await Comprausuario.find(); 
          return comprausuarios;
        },

        
        async getComprausuario(obj, {id}){
          const comprausuario= await Comprausuario.findById(id).populate('compra').populate({path:'compra',populate:'usuario'});
          return comprausuario;
        },

        async getPagousuarios(obj){
          const pagousuarios= await Pagousuario.find(); 
          return pagousuarios;
        },

        
        async getPagousuario(obj, {id}){
          const pagousuario= await Pagousuario.findById(id).populate('pago').populate({path:'pago',populate:'usuario'});
          return pagousuario;
        },

        async getProductocategorias(obj){
          const productocategorias= await Productocategoria.find(); 
          return productocategorias;
        },

        
        async getProductocategoria(obj, {id}){
          const productocategoria= await Productocategoria.findById(id).populate('producto').populate({path:'producto',populate:'categoria'});
          return productocategoria;
        },

        async getProductomenus(obj){
          const productomenus= await Productomenu.find(); 
          return productomenus;
        },

        
        async getProductomenu(obj, {id}){
          const productomenu= await Productomenu.findById(id).populate('producto').populate({path:'producto',populate:'menu'});
          return productomenu;
        },


        async getClientes(obj){
            const clientes= await Cliente.find(); 
            return clientes;
        },
        async getCliente(obj, {run}){
            const cliente= await Cliente.findById(run);
            return cliente;
        },
        async getCompras(obj){
          const compras= await Compra.find(); 
          return compras;
        },
        async getCompra(obj, {id}){
          const compra= await Compra.findById(id);
          return compra;
        },
        async getPagos(obj){
          const pagos= await Pago.find(); 
          return pagos;
        },
        async getMenus(obj){
          const menus = await Menu.find();
          return menus;
        },
        async getPago(obj, {id}){
          const pago= await Pago.findById(id).populate('compra');
          return pago;
        },

        async getProductos(obj){
          const productos= await Producto.find().populate('carro'); 
          return productos;
        },
        async getProducto(obj, {id}){
          const producto= await Producto.findById(id).populate('carro');
          return producto;
        },

        async getSucursales(obj){
          const sucursales = await Sucursal.find();
          return sucursales;
        },
        async getSucursal(obj, {id}){
          const sucursal= await Sucursal.findById(id);
          return sucursal;
        },
        async getUsuarios(obj){
          const usuarios = await Usuario.find();
          return usuarios;
        },
        async getUsuario(obj, {run}){
          const usuario= await Usuario.findById(run);
          return usuario;
        },

        
    },
    Mutation: {
      
      async addUsuario(obj, {input}){
        const usuario=new Usuario(input); 
        await usuario.save();
        return usuario;
      },

      async addCategoria(obj, {input}){
        const categoria=new Categoria(input); 
        await categoria.save();
        return categoria;
      },

      async addCliente(obj, {input}){
        const cliente=new Cliente(input); 
        await cliente.save();
        return cliente;
      },  

      async addCompra(obj, {input}){
        const compra=new Compra(input); 
        await compra.save();
        return compra;
      },  

      async addPago(obj, {input}){
        const pago=new Pago(input); 
        await pago.save();
        return pago;
      },  

      async addMenu(obj, {input}){
        const menu=new Menu(input); 
        await menu.save();
        return menu;
      }, 

      async addProducto(obj, {input}){
        const producto=new Producto(input); 
        await producto.save();
        return producto;
      }, 

//POPULATE
      async addCarro(obj, {input}){
        const carro=new Carro(input); 
        await carro.save();
        return carro;
      }, 

      

      async addCarroproducto(obj, {input}){
        let {productoString, carroString, cantidad} = input; //Se ingresan los valores
        console.log(input)
        const producto =await Producto.findById(productoString); //se busca en producto la id
        const carro =await Carro.findById(carroString)
        console.log(producto)
        console.log(carro)
        const carroproducto = new Carroproducto({producto:producto._id, carro:carro._id, cantidad:cantidad}); //enlaza en la variable carro
        console.log(carroproducto)
        await carroproducto.save();
        return carroproducto;
      }, 

      async addComprausuario(obj, {input}){
        let {compraString, usuarioString} = input; //Se ingresan los valores
        console.log(input)
        const compra =await Compra.findById(compraString); //se busca en producto la id
        const usuario =await Usuario.findById(usuarioString)
        const comprausuario = new Comprausuario({compra:compra._id, usuario:usuario._id}); //enlaza en la variable carro
        await comprausuario.save();
        return comprausuario;
      }, 

      async addPagousuario(obj, {input}){
        let {pagoString, usuarioString} = input; //Se ingresan los valores
        console.log(input)
        const pago =await Pago.findById(pagoString); //se busca en producto la id
        const usuario =await Usuario.findById(usuarioString)
        const pagousuario = new Pagousuario({pago:pago._id, usuario:usuario._id}); //enlaza en la variable carro
        await pagousuario.save();
        return pagousuario;
      }, 

      async addProductocategoria(obj, {input}){
        let {productoString, categoriaString} = input; //Se ingresan los valores
        console.log(input)
        const producto =await Producto.findById(productoString); //se busca en producto la id
        const categoria =await Categoria.findById(categoriaString)
        const productocategoria = new Productocategoria({producto:producto._id, categoria:categoria._id}); //enlaza en la variable carro
        await productocategoria.save();
        return productocategoria;
      }, 

      async addProductomenu(obj, {input}){
        let {productoString, menuString} = input; //Se ingresan los valores
        const producto =await Producto.findById(productoString); //se busca en producto la id
        const menu =await Menu.findById(menuString)
        const productomenu = new Productomenu({producto:producto._id, menu:menu._id}); //enlaza en la variable carro
        await productomenu.save();
        return productomenu;
      }, 

      //120 palabras
      //5 persons
      //5 
      

      
      async addSucursal(obj, {input}){
        const sucursal=new Sucursal(input); 
        await sucursal.save();
        return sucursal;
      }, 

      async  updateCliente(obj, {run, input}){
            const cliente = await Cliente.findByIdAndUpdate(run, input);
            return cliente;
      },

      async deleteCliente(obj, {run}){
            await Cliente.deleteOne({_run:run});
            return {
              message: "Cliente eliminado"
            }
      },

      

      
    }
}

let apolloServer = null;

const corsOptions={
  origin: "http://localhost:8090",
  credentials: false
};

async function startServer(){
  const apolloServer = new ApolloServer({typeDefs, resolvers, corsOptions});
  await apolloServer.start();

  apolloServer.applyMiddleware({app, cors: false});


}

startServer();

const app=express();
app.use(cors());
app.listen(8090, function(){
  console.log("Servidor Iniciado");
});

