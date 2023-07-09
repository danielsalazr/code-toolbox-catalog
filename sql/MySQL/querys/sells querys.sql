use optica;

SELECT factura, CONCAT(T1.nombre, ' ', T1.apellido)e, T0.precio as preciov, T2.precio as abono, T0.precio - T2.precio as saldo, T3.nombre FROM contabilidad_ventas T0
left join usuarios_clientes T1 on T0.cliente_id = T1.id
left join contabilidad_abonos T2 on T0.factura = T2.factura_id
inner join contabilidad_estadoventa T3 on T0.estado_id = T3.id
order by factura desc;

SELECT factura, CONCAT(T1.nombre, ' ', T1.apellido), T0.precio as preciov, T2.precio as abono, T0.precio - T2.precio as saldo, T3.nombre, T0.cliente_id FROM contabilidad_ventas T0
left join usuarios_clientes T1 on T0.cliente_id = T1.id
left join contabilidad_abonos T2 on T0.factura = T2.factura_id
inner join contabilidad_estadoventa T3 on T0.estado_id = T3.id
where factura = 58
order by factura desc;



SELECT factura, CONCAT(T1.nombre, ' ', T1.apellido), T0.precio as preciov, sum(T2.precio) as abono, T0.precio - T2.precio as saldo, T3.nombre, T0.cliente_id FROM contabilidad_ventas T0
left join usuarios_clientes T1 on T0.cliente_id = T1.id
left join contabilidad_abonos T2 on T0.factura = T2.factura_id
inner join contabilidad_estadoventa T3 on T0.estado_id = T3.id
where factura = 58
group by T0.cliente_id
order by factura desc;

SELECT  T1.nombre FROM contabilidad_ventas T0
left join usuarios_clientes T1 on T0.cliente_id = T1.id
group by T0.cliente_id;




