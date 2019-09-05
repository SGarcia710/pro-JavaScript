export default function(context) {
  return {
    VariableDeclaration(node) {
      // tipo de variable = const
      if (node.kind === 'const') {
        const declaration = node.declarations[0];
        // asegurarnos que el valor es un número.
        if (typeof declaration.init.value === "number") {
          // nos fijamos si el nombre de la declaración no está en UPPERCASE
          if (declaration.id.name !== declaration.id.name.toUpperCase()) {
            //Hacemos uso del context que trae la función padre y realizamos un report
            context.report({
              node: declaration.id,//Con lo que queremos arreglar.
              message: "El nombre de la constante debe estar en mayúsculas.",//Con el mensaje
              fix: function(fixer) {//Y con esto si queremos que se arregle
                //Lo cual es un reemplazar texto, primero por parametro qué es lo que se quiere reemplazar y luego cómo se quiere reemplazar.
                return fixer.replaceText(declaration.id, declaration.id.name.toUpperCase())
              }
            });
          }
        }
      }
    }
  };
};