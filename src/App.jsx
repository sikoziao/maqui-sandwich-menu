import React, { useState } from 'react';

const MENU_ITEMS = [
  {
    id: 1,
    nombre: 'Maqui Sándwich (Especial de la Casa)',
    categoria: 'Sándwiches',
    precio: 9500,
    descripcion:
      'Carne de vacuno o pollo a la plancha, palta, tomate, champiñones, cebolla, queso, lechuga, pepinillos y mayonesa.',
    imagen:
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80',
    destacado: true,
    requiereProteina: true,
  },
  {
    id: 2,
    nombre: 'Sándwich Chucrarero',
    categoria: 'Sándwiches',
    precio: 7000,
    descripcion:
      'Carne de vacuno o pollo a la plancha, palta, tomate, chucrut a la plancha, queso y mayonesa opcional.',
    imagen:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80',
    destacado: false,
    requiereProteina: true,
  },
  {
    id: 3,
    nombre: 'Sándwich Kayser',
    categoria: 'Sándwiches',
    precio: 6300,
    descripcion:
      'Carne de vacuno o pollo a la plancha, jamón, queso fundido y mayonesa opcional.',
    imagen:
      'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
    destacado: false,
    requiereProteina: true,
  },
  {
    id: 4,
    nombre: 'Sándwich Che Milico',
    categoria: 'Sándwiches',
    precio: 5800,
    descripcion:
      'Carne de vacuno o pollo a la plancha, cebolla caramelizada, huevo frito y mayonesa opcional.',
    imagen:
      'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80',
    destacado: true,
    requiereProteina: true,
  },
  {
    id: 5,
    nombre: 'Sándwich Italiano',
    categoria: 'Sándwiches',
    precio: 5300,
    descripcion:
      'Clásico en pan frica: carne de vacuno o pollo a la plancha, abundante palta, tomate y mayonesa.',
    imagen:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    destacado: false,
    requiereProteina: true,
  },
  {
    id: 6,
    nombre: 'Sándwich Barros Luco',
    categoria: 'Sándwiches',
    precio: 5300,
    descripcion:
      'Carne de vacuno o pollo a la plancha con abundante queso fundido.',
    imagen:
      'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=600&q=80',
    destacado: false,
    requiereProteina: true,
  },
  {
    id: 7,
    nombre: 'Chorrillana Mediana (2 a 3 pers.)',
    categoria: 'Para Picar',
    precio: 11200,
    descripcion:
      'Papas fritas con carne, pollo, salchichas, queso y 2 huevos sobre salteado de cebolla caramelizada y pimientos.',
    imagen:
      'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80',
    destacado: true,
    requiereProteina: false,
  },
  {
    id: 8,
    nombre: 'Picoteo 2 (Familiar)',
    categoria: 'Para Picar',
    precio: 5300,
    descripcion:
      'Porción de papas fritas medianas + 5 nuggets de pollo + 5 empanaditas fritas de queso.',
    imagen:
      'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80',
    destacado: false,
    requiereProteina: false,
  },
  {
    id: 9,
    nombre: 'Picoteo 1 (Individual)',
    categoria: 'Para Picar',
    precio: 3900,
    descripcion:
      'Papas fritas pequeñas + 3 nuggets de pollo + 3 empanaditas fritas de queso.',
    imagen:
      'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80',
    destacado: false,
    requiereProteina: false,
  },
  {
    id: 10,
    nombre: 'Bandeja Papas Fritas Grande',
    categoria: 'Para Picar',
    precio: 4200,
    descripcion:
      'Porción grande de 450 gramos de papas fritas crujientes recién hechas.',
    imagen:
      'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=600&q=80',
    destacado: false,
    requiereProteina: false,
  },
  {
    id: 11,
    nombre: 'Salchipapa Mediana',
    categoria: 'Para Picar',
    precio: 3100,
    descripcion:
      'Porción mediana de papas fritas con salchichas picadas a la plancha.',
    imagen:
      'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80',
    destacado: false,
    requiereProteina: false,
  },
  {
    id: 12,
    nombre: 'Ensalada César',
    categoria: 'Ensaladas',
    precio: 5300,
    descripcion:
      'Strips de pollo a la plancha sobre cama de lechuga, tomate en cubos, crutones, queso y aderezo César.',
    imagen:
      'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=600&q=80',
    destacado: false,
    requiereProteina: false,
  },
  {
    id: 13,
    nombre: 'Ensalada Hipocalórica',
    categoria: 'Ensaladas',
    precio: 5300,
    descripcion:
      'Churrasco de vacuno o pechuga de pollo a la plancha sobre lechuga, tomate, zanahoria, porotos verdes y choclo.',
    imagen:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
    destacado: false,
    requiereProteina: true,
  },
];

const CATEGORIAS = ['Todos', 'Sándwiches', 'Para Picar', 'Ensaladas'];

export default function App() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');
  const [busqueda, setBusqueda] = useState('');
  const [carrito, setCarrito] = useState([]);
  const [carritoAbierto, setCarritoAbierto] = useState(false);

  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [proteina, setProteina] = useState('Vacuno');
  const [mayonesa, setMayonesa] = useState('Con Mayonesa');

  const [nombreCliente, setNombreCliente] = useState('');
  const [modalidad, setModalidad] = useState('Retiro en local');
  const [direccion, setDireccion] = useState('');
  const [notas, setNotas] = useState('');

  const formatoCLP = (valor) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
    }).format(valor);
  };

  const productosFiltrados = MENU_ITEMS.filter((item) => {
    const coincideCategoria =
      categoriaActiva === 'Todos' || item.categoria === categoriaActiva;
    const coincideBusqueda =
      item.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      item.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

  const manejarClickAgregar = (producto) => {
    if (producto.requiereProteina) {
      setProductoSeleccionado(producto);
      setProteina('Vacuno');
      setMayonesa('Con Mayonesa');
    } else {
      agregarAlCarrito(producto, null, null);
    }
  };

  const agregarAlCarrito = (producto, opProteina, opMayo) => {
    const claveUnica = `${producto.id}-${opProteina || 'base'}-${
      opMayo || 'base'
    }`;

    setCarrito((prev) => {
      const existe = prev.find((item) => item.claveUnica === claveUnica);
      if (existe) {
        return prev.map((item) =>
          item.claveUnica === claveUnica
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          ...producto,
          claveUnica,
          proteina: opProteina,
          mayonesa: opMayo,
          cantidad: 1,
        },
      ];
    });
    setProductoSeleccionado(null);
  };

  const cambiarCantidad = (claveUnica, delta) => {
    setCarrito((prev) =>
      prev
        .map((item) => {
          if (item.claveUnica === claveUnica) {
            return { ...item, cantidad: item.cantidad + delta };
          }
          return item;
        })
        .filter((item) => item.cantidad > 0)
    );
  };

  const totalCarrito = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );
  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  // Función de WhatsApp limpia sin errores de codificación
  const enviarPedidoWhatsApp = () => {
    // CAMBIA ESTE NÚMERO POR EL TUYO PARA PROBAR:
    const telefonoWhatsApp = '56961131006';

    const lineas = [
      `*NUEVO PEDIDO - MAQUI SANDWICH*`,
      `----------------------------------`,
      `*Cliente:* ${nombreCliente || 'Sin especificar'}`,
      `*Entrega:* ${modalidad}`,
      ...(modalidad === 'Delivery' && direccion
        ? [`*Direccion:* ${direccion}`]
        : []),
      `----------------------------------`,
      `*DETALLE DEL PEDIDO:*`,
      ...carrito.map((item) => {
        const opciones = item.proteina
          ? ` (${item.proteina}, ${item.mayonesa})`
          : '';
        return `- ${item.cantidad}x ${item.nombre}${opciones} - ${formatoCLP(
          item.precio * item.cantidad
        )}`;
      }),
      ...(notas ? [`\n*Notas:* ${notas}`] : []),
      `----------------------------------`,
      `*TOTAL A PAGAR: ${formatoCLP(totalCarrito)}*`,
    ];

    const mensaje = lineas.join('\n');
    const url = `https://api.whatsapp.com/send?phone=${telefonoWhatsApp}&text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 pb-28 font-sans">
      <header className="relative bg-gradient-to-b from-purple-950/80 via-stone-900 to-stone-950 border-b border-stone-800 pt-6 pb-5 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Abierto • Retiro y Delivery
              </span>
              <h1 className="text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
                🍇 Maqui Sandwich
              </h1>
              <p className="text-stone-400 text-sm mt-1">
                Sanguchería tradicional en Temuco • Prieto Sur 1085
              </p>
            </div>
            <a
              href="tel:+56452213110"
              className="flex flex-col items-end bg-stone-800/90 hover:bg-stone-700 border border-stone-700 px-3 py-2 rounded-xl text-xs transition"
            >
              <span className="text-stone-400">Fono Pedidos</span>
              <span className="font-bold text-amber-400 text-sm">
                📞 (45) 221 3110
              </span>
            </a>
          </div>

          <div className="mt-4 relative">
            <input
              type="text"
              placeholder="Buscar churrasco, chorrillana, papas..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full bg-stone-900/90 border border-stone-700/80 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-stone-400 focus:outline-none focus:border-amber-500 transition"
            />
            <svg
              className="w-4 h-4 text-stone-400 absolute left-3.5 top-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </header>

      <nav className="sticky top-0 z-20 bg-stone-950/90 backdrop-blur-md border-b border-stone-800 px-4 py-3">
        <div className="max-w-3xl mx-auto flex gap-2 overflow-x-auto no-scrollbar">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaActiva(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap transition ${
                categoriaActiva === cat
                  ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                  : 'bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 pt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {productosFiltrados.map((producto) => (
            <div
              key={producto.id}
              className="bg-stone-900/90 border border-stone-800 rounded-2xl overflow-hidden flex flex-row md:flex-col justify-between hover:border-stone-700 transition"
            >
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    {producto.destacado && (
                      <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold uppercase px-2 py-0.5 rounded">
                        ⭐ Favorito
                      </span>
                    )}
                    <span className="text-xs text-stone-400">
                      {producto.categoria}
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-white leading-snug">
                    {producto.nombre}
                  </h3>
                  <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                    {producto.descripcion}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-extrabold text-amber-400">
                    {formatoCLP(producto.precio)}
                  </span>
                  <button
                    onClick={() => manejarClickAgregar(producto)}
                    className="bg-amber-500 hover:bg-amber-400 active:scale-95 text-stone-950 font-bold text-xs px-3.5 py-2 rounded-xl transition flex items-center gap-1 shadow-sm"
                  >
                    <span>+ Agregar</span>
                  </button>
                </div>
              </div>

              <div className="w-28 sm:w-36 md:w-full md:h-40 relative shrink-0">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </main>

      {productoSeleccionado && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="bg-stone-900 border border-stone-800 w-full max-w-md rounded-t-3xl sm:rounded-2xl p-5 animate-fade-in">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-lg font-bold text-white">
                  {productoSeleccionado.nombre}
                </h3>
                <p className="text-xs text-stone-400">
                  Personaliza tu sándwich antes de agregar
                </p>
              </div>
              <button
                onClick={() => setProductoSeleccionado(null)}
                className="text-stone-400 hover:text-white text-xl font-bold px-2"
              >
                ✕
              </button>
            </div>

            <div className="my-4">
              <label className="block text-xs font-bold uppercase text-stone-300 mb-2">
                1. Elige la proteína (Obligatorio):
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {['Vacuno', 'Pollo a la plancha'].map((op) => (
                  <button
                    key={op}
                    onClick={() => setProteina(op)}
                    className={`py-2.5 px-3 rounded-xl text-sm font-semibold border text-center transition ${
                      proteina === op
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                        : 'bg-stone-800 border-stone-700 text-stone-300'
                    }`}
                  >
                    {op === 'Vacuno' ? '🥩 Vacuno' : '🍗 Pollo'}
                  </button>
                ))}
              </div>
            </div>

            <div className="my-4">
              <label className="block text-xs font-bold uppercase text-stone-300 mb-2">
                2. Mayonesa:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Con Mayonesa', 'Mayo Casera', 'Sin Mayo'].map((op) => (
                  <button
                    key={op}
                    onClick={() => setMayonesa(op)}
                    className={`py-2 px-2 rounded-xl text-xs font-semibold border text-center transition ${
                      mayonesa === op
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                        : 'bg-stone-800 border-stone-700 text-stone-300'
                    }`}
                  >
                    {op}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() =>
                agregarAlCarrito(productoSeleccionado, proteina, mayonesa)
              }
              className="w-full mt-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold py-3 rounded-xl shadow-lg transition"
            >
              Confirmar y Agregar • {formatoCLP(productoSeleccionado.precio)}
            </button>
          </div>
        </div>
      )}

      {carrito.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-30 p-3 bg-gradient-to-t from-stone-950 via-stone-950/95 to-transparent">
          <div className="max-w-3xl mx-auto">
            <button
              onClick={() => setCarritoAbierto(true)}
              className="w-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold py-3.5 px-5 rounded-2xl shadow-xl flex items-center justify-between transition"
            >
              <div className="flex items-center gap-2.5">
                <span className="bg-stone-950 text-amber-400 text-xs font-extrabold px-2.5 py-1 rounded-lg">
                  {totalItems}
                </span>
                <span className="text-sm sm:text-base">Ver mi pedido</span>
              </div>
              <span className="text-base sm:text-lg font-black">
                {formatoCLP(totalCarrito)}
              </span>
            </button>
          </div>
        </div>
      )}

      {carritoAbierto && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end">
          <div className="bg-stone-900 w-full max-w-md h-full flex flex-col justify-between overflow-hidden">
            <div className="p-4 border-b border-stone-800 flex items-center justify-between">
              <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
                🛒 Tu Pedido en Maqui Sandwich
              </h2>
              <button
                onClick={() => setCarritoAbierto(false)}
                className="bg-stone-800 hover:bg-stone-700 text-stone-300 w-8 h-8 rounded-full font-bold"
              >
                ✕
              </button>
            </div>

            <div className="p-4 overflow-y-auto flex-1 space-y-4">
              <div className="space-y-2.5">
                {carrito.map((item) => (
                  <div
                    key={item.claveUnica}
                    className="bg-stone-800/80 border border-stone-700/70 rounded-xl p-3 flex items-center justify-between"
                  >
                    <div className="pr-2">
                      <h4 className="font-bold text-sm text-white">
                        {item.nombre}
                      </h4>
                      {item.proteina && (
                        <p className="text-xs text-amber-400 font-medium">
                          {item.proteina} • {item.mayonesa}
                        </p>
                      )}
                      <span className="text-xs text-stone-300 font-semibold">
                        {formatoCLP(item.precio * item.cantidad)}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 bg-stone-900 px-2 py-1 rounded-lg border border-stone-700">
                      <button
                        onClick={() => cambiarCantidad(item.claveUnica, -1)}
                        className="text-stone-300 hover:text-white font-bold px-1.5"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold w-4 text-center">
                        {item.cantidad}
                      </span>
                      <button
                        onClick={() => cambiarCantidad(item.claveUnica, 1)}
                        className="text-amber-400 hover:text-amber-300 font-bold px-1.5"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-stone-800 pt-4 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                  Datos para la entrega
                </h3>

                <input
                  type="text"
                  placeholder="Tu nombre (Ej: Juan Pérez)"
                  value={nombreCliente}
                  onChange={(e) => setNombreCliente(e.target.value)}
                  className="w-full bg-stone-800 border border-stone-700 rounded-xl p-2.5 text-sm text-white placeholder-stone-400 focus:outline-none focus:border-amber-500"
                />

                <div className="grid grid-cols-2 gap-2">
                  {['Retiro en local', 'Delivery'].map((tipo) => (
                    <button
                      key={tipo}
                      onClick={() => setModalidad(tipo)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold border transition ${
                        modalidad === tipo
                          ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                          : 'bg-stone-800 border-stone-700 text-stone-400'
                      }`}
                    >
                      {tipo === 'Retiro en local'
                        ? '🏪 Retiro en Prieto Sur'
                        : '🛵 Delivery'}
                    </button>
                  ))}
                </div>

                {modalidad === 'Delivery' && (
                  <input
                    type="text"
                    placeholder="Dirección exacta en Temuco (Calle y número)"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                    className="w-full bg-stone-800 border border-stone-700 rounded-xl p-2.5 text-sm text-white placeholder-stone-400 focus:outline-none focus:border-amber-500"
                  />
                )}

                <textarea
                  rows="2"
                  placeholder="Notas adicionales (Ej: sin cebolla, pago con transferencia...)"
                  value={notas}
                  onChange={(e) => setNotas(e.target.value)}
                  className="w-full bg-stone-800 border border-stone-700 rounded-xl p-2.5 text-sm text-white placeholder-stone-400 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div className="p-4 border-t border-stone-800 bg-stone-950 space-y-2.5">
              <div className="flex justify-between items-center text-base font-extrabold">
                <span className="text-stone-300">Total a Pagar:</span>
                <span className="text-xl text-amber-400">
                  {formatoCLP(totalCarrito)}
                </span>
              </div>

              <button
                onClick={enviarPedidoWhatsApp}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-extrabold py-3 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-sm"
              >
                <span>📲 Enviar Pedido por WhatsApp</span>
              </button>

              <a
                href="tel:+56452213110"
                className="w-full bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold py-2.5 rounded-xl transition flex items-center justify-center gap-2 text-xs border border-stone-700"
              >
                <span>📞 O llamar al (45) 221 3110 para dictar pedido</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
