unit UTelaDeLogin;

interface

uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
  Dialogs, cxGraphics, pngimage, ExtCtrls, StdCtrls, cxTextEdit, ExlEdit,
  cxControls, cxContainer, cxEdit, cxMaskEdit, cxDropDownEdit;

type
  TTelaDeLogin = class(TForm)
    CBUsuarios: TExlComboBox;
    EBSenha: TExlEdit;
    BtLogin: TButton;
    BtSair: TButton;
    imgBackground: TImage;
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  TelaDeLogin: TTelaDeLogin;

implementation

{$R *.dfm}


end.
