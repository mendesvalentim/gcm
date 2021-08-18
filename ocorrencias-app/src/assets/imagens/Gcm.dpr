program Gcm;

uses
  Forms,
  UTelaPrincipal in 'UTelaPrincipal.pas' {TelaPrincipal};

{$R *.res}

begin
  Application.Initialize;
  Application.CreateForm(TTelaPrincipal, TelaPrincipal);
  Application.Run;
end.
