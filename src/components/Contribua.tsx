import React, { useEffect, useState } from 'react';

const LOCAL_STORAGE_KEY = 'admin_panel_content';

const QrCodeCard = () => {
  const [qrImage, setQrImage] = useState<string | null>(null);
  const [valor, setValor] = useState<string>('');

  useEffect(() => {
    try {
      const data = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        setQrImage(parsed.qrImage || null);
        setValor(parsed.qrValue || '');
      }
    } catch {}
  }, []);

  if (!qrImage) return null;

  return (
    <section className="py-12 bg-white dark:bg-gray-900 flex justify-center">
      <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center max-w-xs w-full">
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Contribua com o Projeto</h2>
        <img src={qrImage} alt="QR Code de contribuição" className="w-48 h-48 object-contain border rounded mb-4" />
        {valor && <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">Valor sugerido: <span className="font-bold">R$ {valor}</span></p>}
        <span className="text-xs text-gray-400">Aponte a câmera do seu celular para doar</span>
      </div>
    </section>
  );
};

export default QrCodeCard; 