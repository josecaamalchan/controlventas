SELECT * FROM dbo.Categorias
INSERT INTO dbo.Categorias VALUES
('Papeler�a', 'Art�culos y consumibles de papeler�a', 1, GETDATE(), GETDATE()),
('Pinturas', 'Art�culos y consumibles de pintura', 1, GETDATE(), GETDATE()),
('Pl�sticos', 'Art�culos y consumibles de pl�stico', 1, GETDATE(), GETDATE())

SELECT * FROM dbo.Marcas
INSERT INTO dbo.Marcas VALUES
('Berol', 1, GETDATE(), GETDATE()),
('Scribe', 1, GETDATE(), GETDATE()),
('Estrella', 1, GETDATE(), GETDATE()),
('Blancanieves', 1, GETDATE(), GETDATE())

SELECT * FROM dbo.Productos