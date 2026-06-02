#!/bin/bash
# ============================================================================
# Script para desplegar cambios de la landing page
# ============================================================================
# Uso:
#   cd /home/kamira/romanet-landing
#   ./deploy.sh
#
# Requiere sudo solo para reiniciar el servicio fastapi-romanet.
# ============================================================================

set -e  # Salir si algún comando falla

echo "========================================"
echo "  Desplegando landing page"
echo "========================================"

# 1. Compilar
echo "[1/4] Compilando Next.js..."
export PATH="/home/kamira/node20/bin:$PATH"
npm run build

# 2. Limpiar y copiar a static/landing/
echo "[2/4] Copiando build a static/landing/..."
rm -rf /home/kamira/romanet/static/landing
cp -r /home/kamira/romanet-landing/dist /home/kamira/romanet/static/landing

# Limpiar archivos temporales de Next.js
find /home/kamira/romanet/static/landing -name "*.txt" -delete
find /home/kamira/romanet/static/landing -name "__next*" -delete

# 3. Reorganizar HTMLs en subcarpetas para StaticFiles(html=True)
echo "[3/4] Reorganizando archivos HTML..."
cd /home/kamira/romanet/static/landing
for f in *.html; do
    name="${f%.html}"
    if [ "$name" != "index" ] && [ "$name" != "404" ] && [ "$name" != "_not-found" ]; then
        mkdir -p "$name"
        mv "$f" "$name/index.html"
    fi
done

# 4. Reiniciar servicio
echo "[4/4] Reiniciando fastapi-romanet.service..."
sudo systemctl restart fastapi-romanet.service

echo ""
echo "========================================"
echo "  ¡Despliegue completado!"
echo "========================================"
echo ""
echo "Prueba en:"
echo "  https://sinai.ujaen.es/romanet/"
echo "  https://sinai.ujaen.es/romanet/akanai/login"
