SELECT * FROM dbo.Categorias
INSERT INTO dbo.Categorias VALUES
('Papelería', 'Artículos y consumibles de papelería', 1, GETDATE(), GETDATE()),
('Pinturas', 'Artículos y consumibles de pintura', 1, GETDATE(), GETDATE()),
('Plásticos', 'Artículos y consumibles de plástico', 1, GETDATE(), GETDATE())

SELECT * FROM dbo.Marcas
INSERT INTO dbo.Marcas VALUES
('Berol', 1, GETDATE(), GETDATE()),
('Scribe', 1, GETDATE(), GETDATE()),
('Estrella', 1, GETDATE(), GETDATE()),
('Blancanieves', 1, GETDATE(), GETDATE())

SELECT * FROM dbo.Productos